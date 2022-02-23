// Core
import Layout from "./component/Layout/Layout";

// Components
import Heading from "./component/Basic/Heading";
import { List, ListItem } from "./component/Basic/List";
import Card from "./component/Basic/Card";

function App() {
  return (
    <Layout>
      {/* Component */}
      <Heading
        message="Hello World!"
        name="Jimmy Shoes"
        age={23}
        alignment="top"
      />
      {/* Component */}
      <List>
        <ListItem heading="Heading 1" summary="Summary 1" />
        <ListItem heading="Heading 2" />
      </List>
      {/* Component */}
      <Card
        title="Title"
        subtitle="Sub Title"
        mediaAlt="Lorem Ipsom"
        mediaSrc="https://picsum.photos/200/300"
        url="/"
      />
    </Layout>
  );
}

export default App;
