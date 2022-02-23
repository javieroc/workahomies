import {
  Field, ID, ObjectType, registerEnumType,
} from 'type-graphql';

enum TypeOfHouse {
  House,
  Apartment,
  Townhouse,
  Cottage,
  Condo,
}

registerEnumType(TypeOfHouse, {
  name: 'TypeOfHouse',
});

@ObjectType()
export class Host {
  @Field(() => ID)
  id!: string;

  @Field()
  address!: string;

  @Field()
  aboutMe!: string;

  @Field()
  houseDescription?: string;

  @Field(() => TypeOfHouse)
  typeOfHouse!: TypeOfHouse;
}
