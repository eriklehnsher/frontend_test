<template>
  <div class="form__searching d-flex justify-content-center">
    <div class="form__search">
      <div class="form__search--loca d-flex flex-column align-items-start mb-3">
        <div class="form__search--item d-flex align-items-center">
          <p class="form__search--Inputlabel">Địa điểm</p>
          <i
            class="
              form__search--iconloca
              fa-sharp fa-solid fa-location-dot
              icon__loca
            "
          ></i>
        </div>
        <b-input
          class="form__search--Input"
          placeholder="Nhập thành phố, quận, địa chỉ,..."
          v-model="form_searching.car_location"
        />
      </div>
      <div class="form__search--date d-flex flex-column align-items-start mb-3">
        <p class="form__search--datelabel mb-0">Thời gian</p>
        <date-range-picker
          :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
          v-model="form_searching.dateRange"
          :ranges="ranges"
          :opens="opens"
        >
        </date-range-picker>
      </div>
        <b-form-group class="form__search--type mb-24px">
          <p class="form__search--typelabel mb-0">Thời gian</p>
          <b-form-select
            class="form__search--select"
            v-model="form_searching.typeCar"
            :options="typeOptions"
          ></b-form-select>
        </b-form-group>
      <button type="button"
        class="form__search--button mt-40px d-flex align-items-center justify-content-center"
        @click="make_searchCar()"
        ><i class="fa-solid fa-magnifying-glass"></i>
        <p class="mb-0">TÌM XE NGAY</p></button
      >
    </div>
  </div>
</template>
<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  components: { DateRangePicker },
  data() {
    let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 1);
    return {
       typeOptions: [
        { value: "xe-tu-lai", text: "Xe tự lái" },
        { value: "Xe-co-tai-xe", text: "Xe có tài xế" },
      ],
      form_searching: {
        car_location: "",
        typeCar: "",
        dateRange: { startDate, endDate },
      },
      ranges: false,
      opens: "right",
    };
  },
  methods: {
    make_searchCar() {
      console.log(this.form_searching)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>