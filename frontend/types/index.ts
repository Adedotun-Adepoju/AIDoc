export type ContactFormInputType = {
  name: string;
  email: string;
  message: string;
};

export type ProfileUpdateFormInputType = {
  weight?: number;
  blood_group?: string;
  genotype?: string;
}