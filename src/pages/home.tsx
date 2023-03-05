import { Box, Typography, Stack } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
} from "components";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Something went wrong!</Typography>;

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
      <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {latestProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
