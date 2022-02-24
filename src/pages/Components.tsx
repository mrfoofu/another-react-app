// Core
import Layout from "../component/Layout/Layout";

// Components
import Heading from "../component/Basic/Heading";
import { List, ListItem } from "../component/Basic/List";
import Card from "../component/Basic/Card";

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
        <ListItem heading="Heading 2" />
      </List>
      <hr />
      {/* Component */}
      <Card
        title="Title"
        subtitle="Sub Title"
        mediaAlt="Lorem Ipsom"
        mediaSrc="https://picsum.photos/200/300"
        url="/"
      />
      <hr />
    </>
  );
}

export default Components;
