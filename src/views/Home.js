import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from "reactstrap"

const Home = () => {
  return (
    <div>
      <div className="">
        <h2>
          All done for CI/CD configuration. When you push your local changes to
          the remote repository, github will build the whole project and then
          deploy it on the https://prism-sable.vercel.app.
        </h2>
      </div>
    </div>
  )
}

export default Home
