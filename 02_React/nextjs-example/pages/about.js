import {
  TextArea,
  Header,
  List,
  Divider,
  Form,
  Button,
} from "semantic-ui-react";

export default function About() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사 소개
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의 사항
      </Header>
      <Divider />
      <Form>
        <Form.Field>
          <label>제목</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>내용</label>
          <textarea></textarea>
        </Form.Field>
        <button>보내기</button>
      </Form>
    </div>
  );
}
