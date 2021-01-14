<template>
  <ValidationObserver v-slot="{ handleSubmit }" ref="validationObserver">
    <form @submit.prevent="handleSubmit(submitHandler)" class="form">
      <h2 class="form__title">Sign up</h2>

      <div class="form__labels-group">
        <ValidationProvider class="form__label" tag="label" name="First name" rules="required" v-slot="{ errors }">
          <strong class="form__label-name">First name</strong>
          <input class="form__label-input" type="text" v-model="data.firstName">
          <span class="form__label-error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider class="form__label" tag="label" name="Last name" rules="required" v-slot="{ errors }">
          <strong class="form__label-name">First name</strong>
          <input class="form__label-input" type="text" v-model="data.lastName">
          <span class="form__label-error">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <ValidationProvider class="form__label" tag="div" name="Personal phone number" rules="required" v-slot="{ errors }">
        <strong class="form__label-name">Personal phone number</strong>
        <VuePhoneNumberInput v-model="data.personalPhone" valid-color="#008405" error-color="#FC0202"></VuePhoneNumberInput>
        <span class="form__label-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <div class="form__labels-group">
        <ValidationProvider class="form__label" tag="label" name="Email" rules="required|email" v-slot="{ errors }">
          <strong class="form__label-name">Email</strong>
          <input class="form__label-input" type="email" v-model="data.email">
          <span class="form__label-error">{{ errors[0] }}</span>
        </ValidationProvider>

        <label class="form__label form__checkbox-label">
          <input class="form__label-checkbox" type="checkbox" v-model="data.sendEmailCheckbox">
          <strong class="form__label-name">Send me email in plain text</strong>
        </label>
      </div>

      <ValidationProvider class="form__label" tag="label" name="Company name" rules="required" v-slot="{ errors }">
        <strong class="form__label-name">Company name</strong>
        <input class="form__label-input" type="text" v-model="data.companyName">
        <span class="form__label-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider class="form__label" tag="div" name="Company address" rules="required" v-slot="{ errors }">
        <strong class="form__label-name">Company address</strong>
        <vue-google-autocomplete
          id="map"
          classname="form__label-input"
          @placechanged="getAddressData"
          @inputChange="getAddressData"
          v-model="data.companyAddress"
          placeholder=""
        >
        </vue-google-autocomplete>
        <span class="form__label-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider class="form__label" tag="div" name="Company phone number" rules="required"
                          v-slot="{ errors }">
        <strong class="form__label-name">Company phone number</strong>
        <VuePhoneNumberInput v-model="data.companyPhone" valid-color="#008405" error-color="#FC0202"></VuePhoneNumberInput>
        <span class="form__label-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <div class="form__labels-group">
        <ValidationProvider
          :class="['form__label', getPasswordStrength.class]"
          tag="label"
          name="Password"
          rules="min:10|required"
          v-slot="{ errors }"
          vid="confirmation"
        >
          <strong class="form__label-name">Password</strong>
          <b class="form__password-status" v-if="data.password">{{ getPasswordStrength.status }}</b>
          <input
            class="form__label-input form__label-password-input"
            :type="showPassword ? 'text': 'password'"
            v-model="data.password"
          >
          <button
            v-show="data.password"
            type="button"
            @click="showPassword = !showPassword"
            :class="['form__password-show-btn', {'is-showed': showPassword}]"
          ></button>
          <span class="form__label-error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          class="form__label"
          tag="label"
          name="Confirm password"
          rules="confirmed:confirmation|required"
          v-slot="{ errors }"
        >
          <strong class="form__label-name">Confirm password</strong>
          <input class="form__label-input" type="password" v-model="data.confirmedPassword">
          <span class="form__label-error"> {{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <ValidationProvider
        class="form__label form__checkbox-label"
        tag="label"
        name="Accepted privacy policy"
        rules="is_checked"
        v-slot="{ errors }"
      >
        <input class="form__label-checkbox" type="checkbox" v-model="data.acceptedPolicyCheckbox">
        <strong class="form__label-name">Accept <a href="#" class="form__policy-link">Privacy Policy</a></strong>
        <span class="form__label-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <div class="form__footer">
        <button type="submit" class="form__submit-btn">Sign in</button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate';
import {extend} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import VuePhoneNumberInput from 'vue-phone-number-input';
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

Object.keys(rules).forEach(rule => {
  switch (rule) {
    case 'required':
      extend(rule, {
        ...rules[rule],
        message: '{_field_} is required'
      });
      break;
    case 'min':
      extend(rule, {
        ...rules[rule],
        message: '{_field_} field must be at least 10 characters',
      });
      break;
    default:
      extend(rule, rules[rule]);
  }
});

extend('is_checked', {
  validate: value => value,
  computesRequired: true,
  message: '{_field_} is required',
});

export default {
  name: 'SignUpForm',
  components: {
    ValidationObserver,
    ValidationProvider,
    VuePhoneNumberInput,
    VueGoogleAutocomplete,
  },
  data: () => ({
    data: {
      firstName: '',
      lastName: '',
      personalPhone: '',
      email: '',
      sendEmailCheckbox: false,
      companyName: '',
      companyAddress: '',
      companyPhone: '',
      password: '',
      confirmedPassword: '',
      acceptedPolicyCheckbox: false,
    },
    showPassword: false,
  }),
  computed: {
    getPasswordStrength() {
      switch (true) {
        case /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/g.test(this.data.password): //  lower case, upper case, number, special characters
          return {status: 'Strong', class: 'is-strong'};
        case /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g.test(this.data.password): //  lower case, uppercase, number
          return {status: 'Medium', class: 'is-medium'};
        case /([a-z])/g.test(this.data.password): // lower case
          return {status: 'Week', class: 'is-week'};
      }
      return {};
    }
  },
  methods: {
    submitHandler() {
      alert(JSON.stringify(this.data, null, 2));
      setTimeout(() => {
        this.data = {
          firstName: '',
            lastName: '',
            personalPhone: '',
            email: '',
            sendEmailCheckbox: false,
            companyName: '',
            companyAddress: '',
            companyPhone: '',
            password: '',
            confirmedPassword: '',
            acceptedPolicyCheckbox: false,
        }
        this.$nextTick(() => {
          this.$nextTick(() => {
            this.$refs.validationObserver.reset();
          });
        });
      }, 100)
    },
    getAddressData(addressData) {
      this.data.companyAddress = addressData.newVal;
    }
  },
  mounted() {
    setTimeout(() => {
      this.data = {
        firstName: '',
        lastName: '',
        personalPhone: '',
        email: '',
        sendEmailCheckbox: false,
        companyName: '',
        companyAddress: '',
        companyPhone: '',
        password: '',
        confirmedPassword: '',
        acceptedPolicyCheckbox: false,
      }

    }, 2000)
  }
}
</script>

<style scoped>
.form {
  max-width: 670px;
  width: 100%;
  margin: 24px auto;
  padding: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  background-color: #fff;
}

.form__title {
  margin-bottom: 42px;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: .3px;
  text-align: center;
}

.form__labels-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form__labels-group .form__label {
  width: calc(50% - 15px);
}

.form__label {
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 26px;
}

.form__label::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  border-bottom: 3px solid transparent;
  border-radius: 0 0 5px 5px;
}

.form__label.is-strong .form__password-status {
  color: #008405;
}

.form__label.is-strong::after {
  border-color: #008405;
}

.form__label.is-medium .form__password-status {
  color: #d2ab35;
}

.form__label.is-medium::after {
  border-color: #d2ab35;
}

.form__label.is-week .form__password-status {
  color: #FC0202;
}

.form__label.is-week::after {
  border-color: #FC0202;
}

.form__label-name {
  display: inline-block;
  margin-bottom: 9px;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: .9px;
  text-transform: uppercase;
}

.form__label-input {
  display: block;
  width: 100%;
  padding: 11px 13px 12px;
  box-shadow: 0 0 0 1px #D8D8D8;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.2px;
  outline: none;
  cursor: pointer;
}

.form__label-password-input {
  padding-right: 34px;
}

.form__label-error {
  position: absolute;
  left: 0;
  bottom: -15px;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.3px;
  color: #FC0202;
}

.form__checkbox-label {
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
}

.form__checkbox-label .form__label-name {
  width: 152px;
  margin: 0 0 0 8px;
}

.form__label-checkbox {
  width: 16px;
  height: 16px;
}

.form__policy-link {
  color: #5B62FF;
}

.form__password-status {
  float: right;
}

.form__password-show-btn {
  display: none;
  position: absolute;
  bottom: 13px;
  right: 12px;
  width: 19px;
  height: 14px;
  background-size: 19px 14px;
  border: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='%23979797%0A' d='M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.form__password-show-btn.is-showed {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23979797%0A' d='M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z'%3E%3C/path%3E%3C/svg%3E");
}

.form__label-password-input:hover ~ .form__password-show-btn,
.form__password-show-btn:hover {
  display: block;
}

.form__footer {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid #DADADA;
  text-align: right;
}

.form__submit-btn {
  padding: 11px 45px 12px;
  min-width: 270px;
  border: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  letter-spacing: 0.2px;
  background-color: #E9C864;
  transition: background-color .3s ease-in-out;
  border-radius: 5px;
  cursor: pointer;
}

.form__submit-btn:hover {
  background-color: #d2ab35;
}

@media only screen and (max-width: 470px) {
  .form {
    margin: 0 auto;
    padding: 12px;
  }
  .form__labels-group {
    flex-wrap: wrap;
  }
  .form__labels-group .form__label {
    width: 100%;
  }
  .form__checkbox-label .form__label-name {
    width: 100%;
  }
  .form__checkbox-label {
    margin-bottom: 26px;
  }
  .form__footer {
    text-align: center;
  }
}
</style>

<style>
.form__label .vue-phone-number-input .select-country-container {
  min-width: 50%;
  max-width: 50%;
}
</style>
