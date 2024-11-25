import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const RichEditor = ({ content, handleChange }: any) => {
  function Sa(data: string) {
    console.log(data);
    handleChange(data);
  }
  return (
    <CKEditor
      editor={ClassicEditor}
      data={content}
      onReady={(editor) => {
        //editor.setData(content);
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        Sa(data);
        console.log({ event, editor, data });
      }}
      onBlur={(editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
};

export default RichEditor;
