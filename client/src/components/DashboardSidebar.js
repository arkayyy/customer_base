import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import DescriptionIcon from "@material-ui/icons/Description";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import PaymentIcon from "@material-ui/icons/Payment";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import { BarChart as BarChartIcon } from "react-feather";
import NavItem from "./NavItem";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  jobTitle: "",
  name: "Katarina Smith",
};

const items = [
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/app/orders",
    icon: StoreIcon,
    title: "Orders",
  },
  {
    href: "/app/services",
    icon: RoomServiceIcon,
    title: "Services",
  },
  {
    href: "/app/tickets",
    icon: ConfirmationNumberIcon,
    title: "Tickets",
  },
  {
    href: "/app/invoices",
    icon: DescriptionIcon,
    title: "Invoices",
  },
  {
    href: "/app/subscriptions",
    icon: CardMembershipIcon,
    title: "Subscriptions",
  },
  {
    href: "/app/commisions",
    icon: PaymentIcon,
    title: "Commisions",
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          p: 2,
          background: "#F4F6F8",
          m: 2,
          borderRadius: "16px",
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: "pointer",
            width: 45,
            height: 45,
            mr: 3,
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: "calc(100% - 64px)",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
