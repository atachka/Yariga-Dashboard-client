import { Box, Typography, Stack } from "@pankod/refine-mui";
import { PieChart, PropertyReferrals, TotalRevenue } from "components";

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#4ge8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={445}
          series={[60, 40]}
          colors={["#B34336", "#E91E63"]}
        />
        <PieChart
          title="Total customers"
          value={5612}
          series={[45, 55]}
          colors={["#F44336", "#E91E63"]}
        />
        <PieChart
          title="Properties for Cities"
          value={6184}
          series={[26, 74]}
          colors={["#9C27B0", "#4C47B0"]}
        />
      </Box>
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default Home;
