<template>
  <div>
    <div class="d-flex flex-row">
      <h1 class="mr-10px">Tạo xe bởi quản trị viên:</h1>
      <FormCreateCar
        :update="listCarUpdate"
        @newCarData="newCarData"
        @newcarFeature="newcarFeature"
        class="mb-16px"
      >
      </FormCreateCar>
    </div>

    <h1 class="list__car--header">DANH SÁCH XE:</h1>

    <b-table responsive striped hover :fields="fields" :items="listCar">
      <template #cell(name)="car">
        <p class="text-capitalize">{{ car.item.name }}</p>
      </template>
      <template #cell(type)="car">
        <p class="text-capitalize">
          {{
            car.item.type == "xe-tu-lai"
              ? "Xe tự lái"
              : car.item.type == "xe-co-tai-xe"
              ? "Xe có tài xế"
              : ""
          }}
        </p>
      </template>
      <template #cell(seat)="car">
        <p>{{ car.item.seat }}</p>
      </template>
      <template #cell(collateral)="car">
        <p>{{ car.item.collateral }}</p>
      </template>
      <template #cell(price)="car">
        <p>{{ car.item.price }}</p>
      </template>
      <template #cell(features)="car">
        <p>{{ car.item.features }}</p>
      </template>
      <template #cell(action)="car">
        <div class="d-flex">
          <b-button @click="DeleteCar(car.item._id)" class="mr-16px">
            Delete
          </b-button>
          <b-button @click="UpdateCar()" class="mr-16px"> Update </b-button>
          <b-button @click="DetailCar(car.item._id)"> Detail </b-button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import FormCreateCar from "./FormCreateCar.vue";
import axiosIns from "@/libs/axiosConfig";

export default {
  props: {
    update: {
      type: Object,
      default: null,
    },
  },

  components: {
    FormCreateCar,
  },
  data() {
    return {
      features: [],
      car: {},
      fields: [
        {
          key: "name",
          label: "Tên Xe",
        },
        {
          key: "type",
          label: "Loại Xe",
        },
        {
          key: "seat",
          label: "Số ghế",
        },
        {
          key: "collateral",
          label: "Tiền đặt cọc",
        },
        {
          key: "price",
          label: "Giá Thuê Xe",
        },
        {
          key: "features",
          label: "Tính Năng",
        },
        {
          key: "action",
          label: "",
        },
      ],
      listCar: [],
      listCarUpdate: {},
    };
  },
  methods: {
    newcarFeature() {
      return this.features;
    },
    newCarData(element) {
      this.listCar.push(element.data);
    },
    DeleteCar(id) {
      axiosIns
        .delete(`/car/${id}`)
        .then((response) => {
          for (let i = 0; i < this.listCar.length; i++) {
            if (id === this.listCar[i]._id) {
              this.listCar.splice(i, 1);
            }
          }
        })
        .catch(() => {
          console.log("error");
        });
    },
    UpdateCar() {
      console.log("Update");
    },
    DetailCar(id) {
      console.log("Detail", id);
      this.$router.push(`/car/${id}`);
    },
  },
  mounted() {
    // Fetch all cars
    axiosIns
      .get("/car/all")
      .then((response) => {
        this.listCar = response.data;
        console.log(this.listCar);
      })
      .catch(() => {
        console.log("error");
      });
  },
};
</script>