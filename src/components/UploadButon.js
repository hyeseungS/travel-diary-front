import React from "react";
import { Button } from "semantic-ui-react";

class UploadButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          color="grey"
          content="올리기"
          onClick={() => alert("글이 저장되었습니다.")}
        ></Button>
      </div>
    );
  }
}

export default UploadButton;