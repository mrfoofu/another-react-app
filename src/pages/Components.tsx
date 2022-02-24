// Components
import Heading from "../component/Modules/Heading";
import { List, ListItem } from "../component/Modules/List";
import Card from "../component/Modules/Card";
import AxiosExample from "../component/Functions/Axios";

const Components = () =>{

  return (
    <>
      {/* Component */}
      <Heading
        message="Basic Components"
        name="Tony Sun"
        age={50}
        alignment="top"
      />
      <hr />
      {/* Component */}
      <List>
        <ListItem heading="Heading 1" summary="Summary 1" />
        <ListItem heading="Heading 2" summary="Summary 2" />
      </List>
      <hr />
      {/* Component */}
      <Card
        title="Title"
        subtitle="Sub Title"
        mediaAlt="Lorem Ipsom"
        mediaSrc="https://picsum.photos/500/200"
        url="/"
      />
      <hr />
      <AxiosExample />
    </>
  );
}

export default Components;
