<template>
  <div class="car__info">
    <div class="mb-0px">
      <h1 class="car__info--name">
        {{ car.name }}
      </h1>
      <div class="d-flex mb-40px">
        <p class="car__info--namelabel">
          {{
            car.type == "xe-tu-lai"
              ? "Xe tự lái"
              : car.type == "Xe-co-tai-xe"
              ? "Xe có tài xế"
              : ""
          }}
        </p>
        <p class="car__info--namelabel">Giao xe tận nơi</p>
      </div>
    </div>

    <div class="car__info--content d-flex justify-content-start">
      <div class="car__info--content--detail">
        <b-row class="mb-40px">
          <b-col
            cols="4"
            class="label d-flex flex-column justify-content-between"
          >
            <p style="color: #a9aaad" class="car__info--detail--Header">
              Đặc điểm
            </p>
          </b-col>
          <b-col cols="8" class="d-flex flex-column justify-content-between"
            ><ul class="list__feature d-flex flex-wrap">
              <li class="d-flex mr-20px">
                <p class="car__seat--label">Số Ghế:</p>
                <p>
                  {{
                    car.seat == "xe-2-cho"
                      ? "2"
                      : car.seat == "4-5-cho"
                      ? "4-5"
                      : car.seat == "xe-7-cho"
                      ? "7"
                      : car.seat == "xe-12-cho"
                      ? "12"
                      : ""
                  }}
                </p>
              </li>
              <li class="d-flex mr-20px">
                <p class="car__seat--label">Loại xe:</p>
                <p class="">
                  {{
                    car.type == "xe-tu-lai"
                      ? "Xe tự lái"
                      : car.type == "Xe-co-tai-xe"
                      ? "Xe có tài xế"
                      : ""
                  }}
                </p>
              </li>
              <li class="d-flex mr-20px">
                <p class="car__seat--label">Pin:</p>
                <p>{{ car.battCapa }}</p>
              </li>
              <li class="d-flex mr-20px">
                <p class="car__seat--label">Động cơ :</p>
                <p>
                  {{
                    car.fuel == "dong-co-xang"
                      ? "Động cơ xăng"
                      : car.fuel == "dong-co-diesel"
                      ? "Động cơ Diesel"
                      : car.fuel == "dong-co-dien"
                      ? "Động cơ điện"
                      : ""
                  }}
                </p>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row class="mb-40px">
          <b-col cols="4"><p class="car__info--detail--Header">Mô Tả</p></b-col>
          <b-col cols="8"
            ><p class="carinfo__desc mb-0">{{ car.desc }}</p></b-col
          >
        </b-row>
        <b-row class="mb-40px">
          <b-col cols="4"
            ><p class="car__info--detail--Header">Tính Năng</p></b-col
          >
          <b-col cols="8"
            ><ul
              class="carinfo__feature--list d-flex flex-wrap"
              style="list-style-type: none; padding: 0px"
            >
              <li
                class="mr-20px"
                v-for="feature in car.features"
                :key="feature.id"
              >
                {{
                  feature == "map"
                    ? "Bản đồ"
                    : feature == "camera"
                    ? "Camera 360"
                    : feature == "gps"
                    ? "Định vị GPS"
                    : feature == "usb"
                    ? "Khe cắm USB"
                    : feature == "tire"
                    ? "Lốp dự phòng"
                    : feature == "airbag"
                    ? "Túi khi an toàn"
                    : ""
                }}
              </li>
            </ul></b-col
          >
        </b-row>
        <b-row class="mb-40px">
          <b-col cols="4">
            <p class="car__info--detail--Header">Giấy tờ thuê xe</p></b-col
          >
          <b-col cols="8">
            <ul
              class="d-flex flex-wrap carinfo__requiredDoc--list"
              style="list-style-type: none; padding: 0px"
            >
              <li
                class="mr-20px"
                v-for="requiredDocument in car.requiredDocuments"
                :key="requiredDocument.id"
              >
                {{
                  requiredDocument == "cmnd"
                    ? "Chứng minh nhân dân"
                    : requiredDocument == "gplx"
                    ? "Giấy phép lái xe"
                    : requiredDocument == "pp-hk"
                    ? "Passport hoặc hộ khẩu"
                    : ""
                }}
              </li>
            </ul></b-col
          >
        </b-row>
        <b-row class="mb-40px">
          <b-col cols="4"
            ><p class="car__info--detail--Header">Tài sản thế chấp</p></b-col
          >
          <b-col cols="8">
            <p>
              {{ car.collateral }} 15 triệu (tiền mặt/chuyển khoản cho chủ xe
              <br />
              khi nhận xe) hoặc Xe máy (kèm cà vẹt gốc) giá trị 15 triệu
            </p></b-col
          >
        </b-row>
        <b-row class="mb-40px">
          <b-col cols="4"
            ><p class="car__info--detail--Header">Điều khoản</p></b-col
          >
          <b-col cols="8"
            ><p class="car__seat--label">
              Quy định khác: <br />
              ◦ Sử dụng xe đúng mục đích. <br />
              ◦ Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật.<br />
              ◦ Không sử dụng xe thuê để cầm cố, thế chấp.<br />
              ◦ Không hút thuốc, nhả kẹo cao su, xả rác trong xe.<br />
              ◦ Không chở hàng quốc cấm dễ cháy nổ.<br />
              ◦ Không chở hoa quả, thực phẩm nặng mùi trong xe.<br />
              ◦ Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng vui lòng
              vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe.<br />
              Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi tuyệt
              vời !
            </p></b-col
          >
        </b-row>
      </div>

      <!-- booking--form -->
      <div class="car__booking">
        <div class="car__booking--title d-flex align-items-flex-end">
          <h1>{{ car.price }}K</h1>
          <p class="mb-0">/Chuyến</p>
        </div>

        <div class="car__booking-form d-flex flex-column">
          <!-- start_dateTIme -->

          <p class="label_input mb-0 ml-0 mr-0 mt-0">Bắt đầu</p>
          <div class="d-flex flex-wrap">
            <date-range-picker
              :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
              :singleDatePicker="singleDatePicker"
              v-model="form_booking.startdate"
              :ranges="ranges"
              class="start_date"
              id="starDate"
            >
            </date-range-picker>

            <vue-timepicker
              v-model="form_booking.startTime"
              format="HH:mm"
              close-on-complete
              class="start_time"
            ></vue-timepicker>
          </div>
          <!-- end_dateTime -->

          <p class="label_input mb-0 ml-0 mr-0 mt-40px">Kết thúc</p>
          <div class="d-flex flex-wrap">
            <date-range-picker
              :locale-data="{ firstDay: 2, format: 'dd-mm-yyyy' }"
              :singleDatePicker="singleDatePicker"
              v-model="form_booking.enddate"
              :ranges="ranges"
            >
            </date-range-picker>

            <vue-timepicker
              v-model="form_booking.endTime"
              format="HH:mm"
              close-on-complete
            ></vue-timepicker>
            <!-- input-loca -->
            <div class="car__booking--form-loca">
              <i
                class="icon_loca fa-sharp fa-solid fa-location-dot icon__loca"
              ></i>
              <p class="label_input mb-0px mb-0">Địa Điểm</p>

              <b-input
                class="car__booking--input-loca"
                type="text"
                placeholder="Nhập thành phố, quận,..."
                v-model="form_booking.car_location"
              />
            </div>
            <!-- surcharge -->
            <div
              class="car__booking--form-surcharge d-flex flex-column mt-40px"
            >
              <div class="surcharge__detail d-flex flex-column">
                <h5 class="surcharge__detail--header">Giới hạn quãng đường</h5>
                <p class="surcharge__detail--content">
                  Phí: 5 000đ/km vượt giới hạn
                </p>
              </div>
              <div class="surcharge__detail d-flex flex-column">
                <h5 class="surcharge__detail--header">Quá giờ</h5>
                <p class="surcharge__detail--content">
                  Phí: 100 000đ/giờ. Quá 4 giờ tính bằng giá thuê 1 ngày
                </p>
              </div>
              <div class="surcharge__detail d-flex flex-column">
                <h5 class="surcharge__detail--header">Vệ sinh xe</h5>
                <p class="surcharge__detail--content">
                  Phí: 100 000đ (nếu trả xe nhiều vết bẩn, bùn cát, sình lầy....
                  cần phải vệ sinh lại trước khi giao cho khách sau)
                </p>
              </div>
              <div class="surcharge__detail d-flex flex-column">
                <h5 class="surcharge__detail--header">Vệ sinh xe Phí:</h5>
                <p class="surcharge__detail--content">
                  500 000đ (nếu hút thuốc lá trong xe, chở sầu riêng, hải sản
                  nặng mùi .... cần phải đi khử mùi trước khi giao cho khách
                  sau)
                </p>
              </div>
            </div>
            <div class="car__booking--form-loca">
              <p class="label_input mb-0px mb-0">Bảo hiểm</p>
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-circle-check"></i>
                <p class="surcharge__detail--header">
                  Chuyến đi được bảo hiểm bởi HaNoi-Car
                </p>
              </div>
            </div>
            <div class="car__booking--form-loca mt-20px">
              <p class="label_input mb-0">Chi tiết giá</p>
              <div class="d-flex flex-column">
                <p class="surcharge__detail--header">
                  Tổng phí thuê xe: {{ car.price }} x 1 Ngày
                </p>
                <p class="surcharge__detail--header">
                  Phí giao nhận xe : 4500 (0.3km)
                </p>
              </div>
            </div>

            <b-button
              class="
                mt-60px
                car__booking--form-button
                btn btn-block btn-success
              "
              @click="make_booking"
              >ĐẶT XE</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import "vue2-timepicker/dist/VueTimepicker.css";
export default {
  components: { DateRangePicker, VueTimepicker },
  props: {
    car: Object,
  },
  data() {
    let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 1);
    return {
      form_booking: {
        car_location: "",
        startTime: "",
        endTime: "",
        startdate: { startDate },
        enddate: { endDate },
      },
      singleDatePicker: true,
      ranges: false,
    };
  },
  methods: {
    make_booking() {
        console.log(this.form_booking)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>