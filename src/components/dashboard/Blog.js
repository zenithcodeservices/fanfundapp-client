import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import bg1 from "../../assets/images/bg/bg1.jpg";

import React, { useContext, useState, useEffect } from "react"

const Blog = ({ title, subtitle, text, color, id }) => {

  const [parsedText, setParsedText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [snippetAmount, setSnippetAmount] = useState(20);

  useEffect(() => {
    setParsedText(text.substr(0, snippetAmount))
  }, []);

  console.log(id)
  return (
    <Card>
      <Image alt="Card image cap" src={bg1} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="text-muted">{subtitle}</CardSubtitle>
        <br></br>
        <CardText className="mt-3 font-small text-gray-800">{parsedText}</CardText>
        <Button onClick={() => {
          if(!isOpen){
            setParsedText(text)
          }
          else {
            setParsedText(text.substr(0, snippetAmount))
          }
          setIsOpen(!isOpen)
          }} color={color}>{isOpen ? "Read Less" : "Read More"}</Button>
        {/* <Link href={`news/post?id=${id}`}><Button color={color}>Read More</Button></Link> */}
      </CardBody>
    </Card>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string,
};
export default Blog;
