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
import {DropdownItem, Badge} from "reactstrap";

import React, { useContext, useState, useEffect } from "react"

const Blog = ({ title, subtitle, text, color, id, createdAt }) => {

  const [parsedText, setParsedText] = useState("");
  const [daysAgo, setDaysAgo] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [snippetAmount, setSnippetAmount] = useState(20);

  useEffect(() => {
    setIsNew(false)
    setParsedText(text.substr(0, snippetAmount))
    calcDaysAgo();
  }, []);


  const calcDaysAgo = () => {
    if (createdAt !== undefined){
      var createdAtString = createdAt.slice(0, 10)
      console.log(createdAtString)
      var d1 = Date.parse(createdAtString)
      var d2 = new Date()
      var Difference_In_Days = Number(((d2 - d1) / (1000 * 3600 * 24)).toFixed(0));
      console.log(isNew)
      console.log(isOpen)
      if (Difference_In_Days < 4){
        setIsNew(true)
      }
      console.log(Difference_In_Days)
      setDaysAgo(Difference_In_Days)
    }

  }


  console.log(id)
  return (
    <Card>

      {isNew === true ? (
        <Badge style={{width:"90px", position: "absolute", zIndex:"+1",top:"-2%", left:"80%"}} color="primary" pill>
          New
        </Badge>
      ):(
      <span></span>
      )}

      <Image alt="Card image cap" src={bg1} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="text-muted">{subtitle}</CardSubtitle>
        {daysAgo ? (<CardSubtitle className="text-muted">Posted {daysAgo} days ago</CardSubtitle>):(<span></span>)}
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
  createdAt: PropTypes.any,
  text: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string,
};
export default Blog;
