import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumbs = (info) => {
  const location = useRouter();
  const firstUrl = location.pathname.split("/")[1];
  const secondUrl = location.pathname.split("/")[2];

  return (
    <>

    {/* {secondUrl ? `${secondUrl}` : `${firstUrl}`} */}

{/*       <h4 className="text-capitalize">
        {secondUrl ===  "nft-detail" ? "Digital Asset" : "" }
      </h4>
 */}
      <Breadcrumb>

        {firstUrl !== "NFTs" && firstUrl ? <BreadcrumbItem active>{firstUrl}</BreadcrumbItem> : ""}
        {firstUrl === "NFTs" ? <BreadcrumbItem active><Link href="/nft-drops" className="text-decoration-none">{firstUrl}</Link></BreadcrumbItem> : ""}
        {secondUrl !== "nft-detail" ? <BreadcrumbItem active>{info}</BreadcrumbItem> : ""}
        {secondUrl === "nft-detail" ? <BreadcrumbItem active>Digital Asset</BreadcrumbItem> : ""}
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbs;
