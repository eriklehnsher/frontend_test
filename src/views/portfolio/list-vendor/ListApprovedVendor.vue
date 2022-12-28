<template>
  <div>
    <b-table
      responsive
      striped
      hover
      :fields="fields"
      :items="listApprovedVendor"
    >
      <template #cell(name)="vendor">
        <p class="text-capitalize">{{ vendor.item.username }}</p>
      </template>
      <template #cell(carName)="vendor">
        <p class="text-capitalize">{{ vendor.item.carName }}</p>
      </template>
      <template #cell(action)="vendor">
        <b-button @click="DetailCar(vendor.item._id)"> Detail </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axiosIns from "@/libs/axiosConfig";

export default {
  components: {},
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "carName",
          label: "car Name",
        },
        {
          key: "action",
          label: "Action",
        },
      ],

      listApprovedVendor: [],
    };
  },
  methods: {
    newVenderData(element) {
      this.listApprovedVendor.push(element.data);
    },
    DetailCar(id) {
      console.log("Detail", id);
    },
  },
  mounted() {
    // Fetch all vendor
    axiosIns
      .get("/vendor/list-approved")
      .then((response) => {
        this.listApprovedVendor = response.data;
      })
      .catch(() => {
        console.log("error");
      });
  },
};
</script>