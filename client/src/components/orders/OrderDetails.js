import moment from "moment";

import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@material-ui/core";

const OrderDetails = ({ orders }) => (
  <Card>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ORDER</TableCell>
              <TableCell>TITLE</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    PAID
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>COMPLETED</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell style={{ color: "blue" }}>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>
                  {moment(order.createdAt).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell>
                  {order.status === "delivered" && "25th Aug"}
                </TableCell>
                <TableCell>
                  <Chip color="primary" label={order.status} size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    {/* <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box> */}
  </Card>
);

export default OrderDetails;
