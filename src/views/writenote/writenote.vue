<template>
    <div class="writenote">
        <div class="main-content w1170">
            <div class="title">
                标题
            </div>
            <div class="input-wrap">
                <el-input v-model="formData.title"></el-input>
            </div>
            <div class="title">
                内容
            </div>
            <quill-editor
                v-model="formData.content"
                ref="myQuillEditor"
                :options="editorOption"
                @change="handleChange"
                >
            </quill-editor>
            <div class="labels clearfix">
                <span class="labels-title fll">标签：</span>
                <el-radio-group v-model="formData.categories" class="fll" size="small">
                    <el-radio-button v-for="label in labels" :label="label" :key="label._id">{{label.name}}</el-radio-button>
                </el-radio-group>
            </div>
            <el-button type="primary" @click="handleSubmit">
                发布笔记
            </el-button>
        </div>
    </div>
</template>

<script>
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
   // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
  Quill.register('modules/ImageExtend', ImageExtend)
    export default {
        components: {quillEditor},
        data() {
        return {
            formData:{
                 content: '',
                 title:'',
                 contentText:'',
                categories: [],
            },
             
             labels: [],
          
            // 富文本框参数设置
            editorOption: {  
            modules: {
                ImageExtend: {
                loading: true,
                name: 'img',
                action:'https://qiniu.com',
                response: (res) => {
                    return res.info
                }
                },
                toolbar: {
                container: container,
                handlers: {
                    'image': function () {
                    QuillWatch.emit(this.quill.id)
                    }
                }
                }
            } 
            }
        }
        },
        methods:{
            handleChange({ quill, html, text }){
                this.formData.contentText = text
                this.formData.contentText = this.formData.contentText.substring(0,200)+'...'
            },
            getLabels () {
                this.$axios.get('/category').then(res => {
                    console.log(res)
                    this.labels = res.data;
                })
            },
            handleSubmit(){
                console.log('hahah')
                this.$axios.post('/article',this.formData).then(res => {
                    console.log(res)
                    if(res.code == 200) {
                    this.$message.success('笔记发布成功!');
                    setTimeout(() => {
                         this.$router.push('/index')
                    }, 500)
                    }
                })
            }
        },
        mounted () {
        this.getLabels();
      }
    }
</script>

<style scoped>
    .main-content{
        margin-top: 30px;
        background: #fff;
        border-radius: 6px;
        padding: 30px;
        box-sizing: border-box;
    }
    .title{
        line-height: 2;
        font-size: 20px;
        font-weight: 700;

    }
    /* .ql-container{
        min-height: 300px;
    } */
    .labels {
      margin-top: 10px;
    }
     .labels-title {
        font-size: 14px;
        font-weight: 700;
        color: #409eff;
      }

</style>


<style>
    .ql-container{
        min-height: 300px;
    }
</style>
