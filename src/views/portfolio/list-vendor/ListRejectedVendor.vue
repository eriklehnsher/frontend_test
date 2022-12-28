<template>
  <div>
    123
    <b-table
      responsive
      striped
      hover
      :fields="fields"
      :items="listRejectedVendor"
    >
      <template #cell(name)="vendor">
        <p class="text-capitalize">{{ vendor.item.username }}</p>
      </template>
         <template #cell(carname)="vendor">
        <p class="text-capitalize">{{ vendor.item.carName }}</p>
      </template>
      <template #cell(action)="vendor">
        <div class="d-flex">
          <b-button @click="DetailCar(vendor.item._id)"> Detail </b-button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import axiosIns from "@/libs/axiosConfig";

export default {
  props: {
    update: {
      type: Object,
      default: null,
    },
  },

  components: {},
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "carname",
          label: "carName",
        },
        {
          key: "action",
          label: "Action",
        },
      ],
      listRejectedVendor: [],
    };
  },
  methods: {
    DetailCar(id) {
      console.log("Detail", id);
    },
  },
  mounted() {
    // Fetch all vendor
    axiosIns
      .get("/vendor/list-rejected")
      .then((response) => {
        this.listRejectedVendor = response.data;
      })
      .catch(() => {
        console.log("error");
      });
  },
};
</script>