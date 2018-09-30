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
                >
            </quill-editor>
            <el-button type="primary">
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
            },
          
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
</style>


<style>
    .ql-container{
        min-height: 300px;
    }
</style>
