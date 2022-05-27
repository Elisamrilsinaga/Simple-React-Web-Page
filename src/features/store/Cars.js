import axios from "axios";

export const getCars = async () => {
   const res = await axios.get(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`);
   return res.data;
};

export const getCar = async (id) => {
   const res = await axios.get(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json/${id}`);
   return res.data;
};

export const deleteCar = async (id) => {
   const res = await axios.delete(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json/${id}`);
   return res.status;
};
