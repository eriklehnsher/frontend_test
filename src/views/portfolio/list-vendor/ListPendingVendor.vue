<template>
  <div class="vendor__list">
    123
    <b-table
      responsive
      striped
      hover
      :fields="fields"
      :items="listPendinguser"
    >
      <template #cell(name)="user">
        <p class="text-capitalize">{{ user.item.username }}</p>
        
      </template>
      <template #cell(carName)="user">
        <p class="text-capitalize">{{ user.item.carName }}</p>
      </template>
      <template #cell(action)="user">
        <div class="d-flex">
          <b-button
            @click="Approveuser(user.item._id)"
            class="mr-16px"
            variant="success"
          >
            Approve
          </b-button>
          <b-button
            @click="Rejectuser(user.item._id)"
            class="mr-16px"
            variant="danger"
          >
            Reject
          </b-button>
          <b-button @click="DetailCar(user.item._id)"> Detail </b-button>
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
          key: "carName",
          label: "carName",
        },
        {
          key: "action",
          label: "Action",
        },
      ],
      listPendinguser: [],
    };
  },
  methods: {
    DetailCar(id) {
      console.log("Detail", id);
    },
    Approveuser(id) {
      axiosIns
        .post(`/vendor/approve/${id}`)
        .then((response) => {
          for (let i = 0; i < this.listPendinguser.length; i++) {
            if (id === this.listPendinguser[i]._id) {
              this.listPendinguser.splice(i, 1);
            }
          }
        })
        .catch(() => {
          console.log("error");
        });
    },
    Rejectuser(id) {
      axiosIns
        .post(`/vendor/reject/${id}`)
        .then((response) => {
          for (let i = 0; i < this.listPendinguser.length; i++) {
            if (id === this.listPendinguser[i]._id) {
              this.listPendinguser.splice(i, 1);
            }
          }
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
  mounted() {
    // Fetch all user
    axiosIns
      .get("/vendor/list-pending")
      .then((response) => {
        this.listPendinguser = response.data;
        console.log(this.listPendinguser)
      })
      .catch(() => {
        console.log("error");
      });
  },
};
</script>
<style scoped>

</style>