<script>
import moment from 'moment';

export default {
  name: "Vuetify2.xDatetimePicker", // vue component name
  props: {
    value: {
      type: String
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD"
    },
    timeFormat: {
      type: String,
      default: "HH:mm"
    },
    pickerWidth: {
      type: String,
      default: "290"
    },
    label: {
      type: String,
      default: "Date/Time Picker"
    },
    icon: {
      type: String,
      default: "event"
    },
    filled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    date_time() {
      return this.date + " " + this.time + ":00";
    }
  },
  data() {
    return {
      date_modal: false,
      time_modal: false,
      date: moment(this.value).format(this.dateFormat),
      time: moment(this.value).format(this.timeFormat)
    };
  },
  methods: {
    updateDate() {
      console.log("Calling updateDate");
      this.date_modal = false;
      this.time_modal = false;
      this.$emit("input", this.date_time);
      this.$emit("save", this.date_time);
    }
  }
};
</script>

<template>
  <v-dialog
    ref="date_dialog"
    v-model="date_modal"
    :return-value.sync="date"
    persistent
    full-width
    :width="pickerWidth + 'px'"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date_time"
        ref="dateTime"
        :label="label"
        :prepend-icon="icon"
        :filled="filled"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-dialog
        ref="time_dialog"
        v-model="time_modal"
        :return-value.sync="date"
        persistent
        full-width
        :width="pickerWidth + 'px'"
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text>OK</v-btn>
        </template>
        <v-time-picker v-model="time" scrollable>
          <v-spacer></v-spacer>
          <v-btn @click="updateDate" text>OK</v-btn>
        </v-time-picker>
      </v-dialog>
    </v-date-picker>
  </v-dialog>
</template>