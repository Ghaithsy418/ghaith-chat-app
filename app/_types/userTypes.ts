export interface UserType {
  email: string;
  emailVerified: false;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  phoneNumber: string;
  _id: string;
  bio: string;
  image: string;
}

export interface UpdateProfileType {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  password?: string;
  phoneNumber?: string;
  bio?: string;
  image?: File;
}
