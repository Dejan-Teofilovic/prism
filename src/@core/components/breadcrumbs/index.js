// ** React Imports
import { Fragment } from "react";
import { Link } from "react-router-dom";

// ** Third Party Components
import Proptypes from "prop-types";
import classnames from "classnames";
import {
  Grid,
  CheckSquare,
  MessageSquare,
  Mail,
  Calendar,
} from "react-feather";

// ** Reactstrap Imports
import {
  Breadcrumb,
  DropdownMenu,
  DropdownItem,
  BreadcrumbItem,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";

const BreadCrumbs = (props) => {
  // ** Props
  const { data, title } = props;

  const renderBreadCrumbs = () => {
    return data.map((item, index) => {
      const Wrapper = item.link ? Link : Fragment;
      const isLastItem = data.length - 1 === index;
      return (
        <BreadcrumbItem
          tag="li"
          key={index}
          active={!isLastItem}
          className={classnames({ "text-primary": !isLastItem })}
        >
          <Wrapper {...(item.link ? { to: item.link } : {})}>
            {item.title}
          </Wrapper>
        </BreadcrumbItem>
      );
    });
  };

  return (
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            {title ? (
              <h2 className="content-header-title float-start mb-0">{title}</h2>
            ) : (
              ""
            )}
            <div className="breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12">
              <Breadcrumb>
                <BreadcrumbItem tag="li">
                  <Link to="/">Home</Link>
                </BreadcrumbItem>
                {renderBreadCrumbs()}
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
      <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
        <div className="breadcrumb-right dropdown">
          <UncontrolledButtonDropdown>
            <DropdownToggle
              color="primary"
              className="btn-icon btn-round dropdown-toggle"
            >
              <Grid size={14} />
            </DropdownToggle>
            <DropdownMenu tag="ul" end>
              <DropdownItem tag={Link} to="/apps/todo">
                <CheckSquare className="me-1" size={14} />
                <span className="align-middle">Todo</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/apps/chat">
                <MessageSquare className="me-1" size={14} />
                <span className="align-middle">Chat</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/apps/email">
                <Mail className="me-1" size={14} />
                <span className="align-middle">Email</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/apps/calendar">
                <Calendar className="me-1" size={14} />
                <span className="align-middle">Calendar</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </div>
    </div>
  );
};
export default BreadCrumbs;

// ** PropTypes
BreadCrumbs.propTypes = {
  title: Proptypes.string.isRequired,
  data: Proptypes.arrayOf(
    Proptypes.shape({
      link: Proptypes.string,
      title: Proptypes.string.isRequired,
    })
  ),
};
