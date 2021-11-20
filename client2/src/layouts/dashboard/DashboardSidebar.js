import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Link, List, Drawer, Typography } from "@material-ui/core";
// hooks
import useAuth from "../../hooks/useAuth";
// routes
import { PATH_DASHBOARD, PATH_DOCS } from "../../routes/paths";
// components
import Logo from "../../components/Logo";
import MyAvatar from "../../components/MyAvatar";
import Scrollbar from "../../components/Scrollbar";
import NavSection from "../../components/NavSection";
import { MHidden } from "../../components/@material-extend";
//
import sidebarConfig from "./SidebarConfig";
import StoreIcon from "@material-ui/icons/Store";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import DescriptionIcon from "@material-ui/icons/Description";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import PaymentIcon from "@material-ui/icons/Payment";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { BarChart as BarChartIcon } from "react-feather";
import NavItem from "./NavItem";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const items = [
  {
    href: "/dashboard/app",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/dashboard/orders",
    icon: StoreIcon,
    title: "Orders",
  },
  {
    href: "/dashboard/services",
    icon: RoomServiceIcon,
    title: "Services",
  },
  {
    href: "/dashboard/tickets",
    icon: ConfirmationNumberIcon,
    title: "Tickets",
  },
  {
    href: "/dashboard/invoices",
    icon: DescriptionIcon,
    title: "Invoices",
  },
  {
    href: "/dashboard/subscriptions",
    icon: CardMembershipIcon,
    title: "Subscriptions",
  },
  {
    href: "/dashboard/commisions",
    icon: PaymentIcon,
    title: "Commisions",
  },
  {
    href: "/dashboard/orders2",
    icon: StoreIcon,
    title: "Orders2",
  },
  {
    href: "/dashboard/client",
    icon: AccountCircle,
    title: "Clients",
  },
  {
    href: "/dashboard/tickets2",
    icon: ConfirmationNumberIcon,
    title: "Tickets2",
  },
  {
    href: "/dashboard/invoices2",
    icon: DescriptionIcon,
    title: "Invoices2",
  },
  {
    href: "/dashboard/subscriptions2",
    icon: CardMembershipIcon,
    title: "Subscriptions2",
  },
  {
    href: "/dashboard/services2",
    icon: RoomServiceIcon,
    title: "Services2",
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12],
}));

const DocStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor:
    theme.palette.mode === "light"
      ? alpha(theme.palette.primary.main, 0.08)
      : theme.palette.primary.lighter,
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
          <Logo />
        </Box>
      </Box>

      

      {/* <NavSection navConfig={sidebarConfig} /> */}
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

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
          <Link
            underline="none"
            component={RouterLink}
            to={PATH_DASHBOARD.user.account}
          >
          <AccountStyle>
            <MyAvatar />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {user.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {user.role}
              </Typography>
            </Box>
          </AccountStyle>
          </Link>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: { width: DRAWER_WIDTH, bgcolor: "background.default" },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
