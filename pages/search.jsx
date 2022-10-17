import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

import { Footer, Header, InfoCard, Map } from "../components";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, endDate, startDate, guestNumber } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndtDate = format(new Date(endDate), "dd MMM yy");
  const stayRange = `${formattedStartDate} - ${formattedEndtDate}`;

  //   if (formattedEndtDate == formattedStartDate) {
  //     <span>{formattedStartDate}</span>;
  //   } else {
  //     <span>{`${formattedStartDate} - ${formattedEndtDate}`}</span>;
  //   }

  //   console.log(searchResults);

  return (
    <div className="h-screen ">
      <Header
        placeholder={`${location} | ${stayRange} | ${guestNumber} ${
          guestNumber == 1 ? "guest" : "guests"
        }`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays <span className="font-semibold">{stayRange}</span> for{" "}
            {guestNumber} {guestNumber == 1 ? "guest" : "guests"}
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in <span className="capitalize text-red-400">{location}</span>
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters...</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <InfoCard
                  key={long}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[400px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};
