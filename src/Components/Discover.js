import React, {useState} from "react";
import { Layout, Space, Button} from 'antd';
import Bottom from './Bottom';
const { Header, Footer, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: '#000000',
  height: 70,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#ffffff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 740,
  lineHeight: '30px',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const Discover = () => {
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 500]}></Space>
    const [size, setSize] = useState('large'); // default is 'middle'
    return(
        <Layout>
        <Header style={headerStyle}>
            <div>
                <h1>Sri Mariamman Temple</h1>
            </div>
        </Header>
        <Content style={contentStyle}>
            <div>
                <h1>Our Story</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <h2>Fun Facts</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the w</p>
            </div>
        </Content>
        <Bottom />
      </Layout>
    )
}
export default Discover;