import React from 'react';
import faker from 'faker';
import { Layout } from 'src/components';
import NearHostImage1 from 'src/assets/near-host-1.jpeg';
import NearHostImage2 from 'src/assets/near-host-2.jpeg';
import NearHostImage3 from 'src/assets/near-host-3.jpeg';
import NearHostImage4 from 'src/assets/near-host-4.jpeg';
import NearHostImage5 from 'src/assets/near-host-5.jpeg';
import NearHostImage6 from 'src/assets/near-host-6.jpeg';
import { Host } from 'src/types';
import { Hero, NearHostList, TryHosting } from './components';

const hosts: Host[] = [
  NearHostImage1,
  NearHostImage2,
  NearHostImage3,
  NearHostImage4,
  NearHostImage5,
  NearHostImage6,
].map((image) => ({
  name: faker.name.findName(),
  address: faker.address.streetAddress(),
  apartmentType: faker.random.arrayElement(['Apartment', 'House', 'Flat']),
  countReviews: faker.datatype.number({ min: 0, max: 10 }),
  rate: faker.datatype.float({ max: 9 }),
  profileImage: image,
}));

function Home(): JSX.Element {
  return (
    <Layout>
      <Hero />
      <NearHostList hosts={hosts} />
      <TryHosting />
    </Layout>
  );
}

export { Home };
