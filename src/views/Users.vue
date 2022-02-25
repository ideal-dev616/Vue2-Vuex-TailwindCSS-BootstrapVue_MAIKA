<template>
  <div id="page-user-view">
    <div id="user-data" class="grid lg:grid-cols-12 lg:gap-20">
        <div class="lg:col-start-2 lg:col-span-5">    
          <vx-card title="Users" class="mb-base">
            <div class="grid grid-cols-11 gap-8">
              <div class="col-span-5">              
                <!-- <vs-input icon-pack="feather" icon="icon-search" placeholder="Search By User name" icon-no-border class="w-full"/>
                <vs-input placeholder="Search By User name" class="w-full"/>
                <b-input-group>
                  <b-form-input class="LoginInput" size="lg" placeholder="Username">
                  </b-form-input>
                  <feather-icon icon="PlusCircleIcon" style="position:"/>
                </b-input-group> -->
                <search-field placeholder="Search by User name" />
              </div>
              <div class="col-span-3">              
                <v-select :options="['foo','bar']" placeholder="Filter by" />
              </div>
              <div class="col-span-3">              
                <vs-button color="warning" type="filled" icon-pack="feather" icon="icon-plus-circle" class="my-btn-primary">NEW USER</vs-button>
              </div>
              
            </div>
            
            <div class="mb-12">
              <ul class="mt-8">
                <li class="cursor-pointer" v-for="(contact, index) in contacts" :key="index">
                  <user-item :contact="contact"/>
                </li>
              </ul>
            </div>            
          </vx-card>
        </div>

        <div class="lg:col-start-7 lg:col-span-5"> 
          <vx-card title="Create New User" class="mb-base">
            <validation-observer ref="observer" v-slot="{ handleSubmit }">
              <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
                <div id="card_container_2">
                  <div class="grid grid-cols-10 gap-x-8 gap-y-6 pt-2">
                      <div class="col-span-3 flex items-center">              
                        Select Location
                      </div>
                      <div class="col-span-7">              
                        <v-select :options="['foo','bar']" placeholder="current of new office" />
                      </div>                

                      <!-- First Name -->
                      <div class="col-span-4">
                        <validation-provider
                          name="First Name"
                          :rules="{ required: true, min: 1 }"
                          v-slot="validationContext"
                        >
                          <b-form-group label="First Name" label-for="first_name">
                            <b-form-input
                              id="first_name"
                              name="first_name"
                              v-model="form.first_name"
                              :state="getValidationState(validationContext)"
                              aria-describedby="first_name-live-feedback"
                              class="my-bootstrap"
                            ></b-form-input>

                            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            <b-form-valid-feedback>Looks Good.</b-form-valid-feedback>
                          </b-form-group>
                        </validation-provider>
                      </div>

                      <!-- Last Name -->
                      <div class="lg:col-start-7 lg:col-span-4">
                        <validation-provider
                          name="Last Name"
                          :rules="{ required: true, min: 1 }"
                          v-slot="validationContext"
                        >
                          <b-form-group label="Last Name" label-for="last_name">
                            <b-form-input
                              id="last_name"
                              name="last_name"
                              v-model="form.last_name"
                              :state="getValidationState(validationContext)"
                              aria-describedby="last_name-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            <b-form-valid-feedback>Looks Good.</b-form-valid-feedback>
                          </b-form-group>
                        </validation-provider>
                      </div>
                

                    <!-- Position -->
                    <div class="lg:col-span-6">
                      <validation-provider
                          name="Position"
                          :rules="{ required: true, min: 2 }"
                          v-slot="validationContext"
                        >
                          <b-form-group label="Position" label-for="position">
                            <b-form-input
                              id="position"
                              name="position"
                              v-model="form.position"
                              :state="getValidationState(validationContext)"
                              aria-describedby="position-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            <b-form-valid-feedback>Looks Good.</b-form-valid-feedback>
                          </b-form-group>
                      </validation-provider>
                    </div>

                    <!-- Email -->
                    <div class="lg:col-span-6">
                      <validation-provider
                          name="Email"
                          :rules="{ required: true, min: 2, email: true }"
                          v-slot="validationContext"
                        >
                          <b-form-group label="Email" label-for="email">
                            <b-form-input
                              id="email"
                              name="email"
                              type="email"
                              v-model="form.email"
                              :state="getValidationState(validationContext)"
                              aria-describedby="email-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                            <b-form-valid-feedback>Looks Good.</b-form-valid-feedback>
                          </b-form-group>
                      </validation-provider>
                    </div>

                    <div class="col-span-10">
                      <b-img :src="require('@/assets/images/profile/girl.png')" width="178px"  fluid alt="Responsive image" class="m-auto mt-36"></b-img>
                    </div>
                    <!-- <div class="col-span-10"> -->
                      <!-- <vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
                      <vs-upload multiple text="Upload Multiple" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" /> -->
                      <!-- <vue-core-image-upload
                        :class="['btn', 'btn-primary']"
                        :crop="false"
                        @imageuploaded="imageuploaded"
                        :data="data"
                        :max-file-size="5242880"
                        url="your server url" >
                      </vue-core-image-upload> -->
                    <!-- </div> -->
                  </div>  

                  <div class="grid grid-cols-10 gap-x-8 gap-y-6 pt-8 mx-4 mb-1">
                    <div class="col-span-5">
                      <b-button class="w-full upload-btn">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M31.963 29.8818C31.8405 29.497 30.4864 26.0986 20.7059 24.4247C22.5598 21.3518 23.5465 17.1881 23.8327 15.8383C24.3624 15.6575 25.6994 15.0369 25.6994 13.4223C25.6994 12.3445 24.9718 11.556 23.6974 11.2464C23.6519 10.1339 23.36 7.62812 21.7111 5.96438C20.7116 4.95601 19.3959 4.41927 17.7955 4.36863V0.774943C17.7955 0.365517 17.4794 0.0255348 17.0764 0.00238708C17.0508 0.000940344 16.9825 -0.00195312 16.8771 -0.00195312C16.0441 -0.00195312 13.1466 0.177442 10.8598 2.48788C8.92338 4.44531 7.97366 7.37061 8.03488 11.1828C6.5982 11.4446 5.74388 12.275 5.74388 13.4208C5.74388 15.0354 7.08089 15.6561 7.61057 15.8369C7.90104 17.207 8.90344 21.4329 10.7886 24.5101C1.46374 26.2129 0.156625 29.5085 0.0370206 29.8818C0.0128148 29.9585 0 30.038 0 30.1191V32.2269C0 32.6537 0.341728 32.9995 0.760345 32.9995C1.17896 32.9995 1.52069 32.6523 1.52069 32.2269V30.2941C1.66165 30.0467 2.16855 29.3147 3.61093 28.4712C5.52603 27.3515 8.27552 26.4892 11.7839 25.9076C12.9743 27.3326 14.2842 28.056 15.6782 28.056C15.6867 28.056 15.6953 28.0546 15.7038 28.0531C15.7252 28.0546 15.7466 28.056 15.7636 28.056C17.1861 28.056 18.5202 27.3052 19.7291 25.8237C19.7533 25.8309 19.7789 25.8353 19.8017 25.8396C23.4838 26.4169 26.3615 27.295 28.3535 28.4481C29.8243 29.3002 30.3369 30.0395 30.4779 30.2883V32.2269C30.4779 32.6537 30.8196 32.9995 31.2382 32.9995C31.6568 32.9995 31.9986 32.6523 31.9986 32.2269V30.1191C32 30.0395 31.9872 29.9585 31.963 29.8818ZM11.9206 3.59752C13.3929 2.1016 15.2226 1.68928 16.2748 1.58077V5.15276C16.2748 5.36543 16.3617 5.57087 16.5154 5.71699C16.6578 5.85153 16.8429 5.92676 17.0352 5.92676C17.0508 5.92676 17.0679 5.92676 17.0836 5.92532C17.2402 5.91519 17.3954 5.9094 17.5449 5.9094C18.8392 5.9094 19.8786 6.29568 20.6347 7.05666C22.1112 8.54246 22.1853 11.1205 22.1824 11.679C22.1454 11.8077 22.1411 11.9423 22.171 12.0739C22.2451 12.3995 22.5156 12.6382 22.8417 12.6685C23.1549 12.6975 24.1773 12.8378 24.1773 13.4223C24.1773 14.2498 23.1905 14.4234 23.078 14.4393C22.7548 14.4842 22.4957 14.7345 22.4345 15.0614C22.1169 16.7744 21.358 19.6201 20.2602 22.0014C19.3176 24.0457 17.7784 26.4863 15.7893 26.5095H15.7864C15.7793 26.508 15.7708 26.508 15.7651 26.508C15.7508 26.5066 15.7352 26.5066 15.7209 26.5066C15.7081 26.5066 15.6939 26.5066 15.6811 26.508C15.6754 26.508 15.6697 26.5095 15.664 26.5095C13.6748 26.4993 12.1328 24.0616 11.1873 22.0159C10.0853 19.6317 9.32348 16.7787 9.00454 15.0614C8.94474 14.7374 8.68702 14.4885 8.36522 14.4393C8.25274 14.422 7.26315 14.2498 7.26315 13.4208C7.26315 12.6946 8.80235 12.6541 8.81659 12.6541C9.02305 12.6541 9.22381 12.5673 9.3662 12.4139C9.50859 12.262 9.58548 12.0537 9.57551 11.8439C9.39895 8.13159 10.1878 5.3582 11.9206 3.59752Z" fill="#375CE8"/>
                          <path d="M12.8264 11.9575C12.8776 11.9705 12.9346 11.9777 12.9915 11.9777C13.3105 11.9777 13.5725 11.7781 13.6935 11.4424L13.7163 11.3802C13.7191 11.373 13.7206 11.3672 13.722 11.36C13.8914 10.5397 14.572 9.96097 15.3765 9.95229C16.2308 9.95229 16.9399 10.6077 17.0609 11.5104C17.1492 12.1658 16.8815 12.6823 16.6381 13.0599C16.3576 13.4953 16.0756 13.9236 15.778 14.3778L15.7325 14.4473L15.1658 15.3139C14.9095 15.7088 14.787 16.0286 14.7699 16.3541L14.7144 17.4493C14.7144 17.4522 14.7144 17.4551 14.7144 17.4579L14.7201 17.8818C14.7116 17.9875 14.6973 18.4302 14.9721 18.7065C15.0618 18.7962 15.2227 18.9047 15.4733 18.9047C15.5018 18.9047 15.5331 18.9032 15.5645 18.9003C15.9617 18.8468 16.2081 18.5459 16.2137 18.1162C16.2152 17.8283 16.2152 17.5042 16.2109 17.1831C16.2038 16.6825 16.3433 16.2166 16.6281 15.8C16.779 15.5772 16.93 15.3486 17.0752 15.1273L17.0894 15.107L17.1136 15.0694C17.3443 14.7164 17.6305 14.2795 17.9238 13.8715C18.5233 13.0411 18.7098 12.1195 18.509 10.9722C18.3681 10.1592 17.8754 9.4141 17.1578 8.92945C16.6267 8.57066 16.0215 8.38113 15.4078 8.38113C15.1928 8.38113 14.9807 8.40573 14.7771 8.45202C13.45 8.75584 12.4732 9.76855 12.2298 11.0938C12.1927 11.2963 12.2383 11.5003 12.3593 11.6652C12.4704 11.8244 12.6498 11.9343 12.8264 11.9575Z" fill="#375CE8"/>
                          <path d="M15.4578 19.4848C15.0491 19.4848 14.7159 19.8233 14.7159 20.2386C14.7159 20.6552 15.0491 20.9937 15.4578 20.9937C15.8664 20.9937 16.1996 20.6552 16.1996 20.2386C16.201 19.8219 15.8678 19.4848 15.4578 19.4848Z" fill="#375CE8"/>
                          <path d="M25.5786 2.16973H28.4705C28.9019 2.16973 29.2522 2.52562 29.2522 2.96398V5.72001C29.2522 5.79958 29.3162 5.86469 29.3946 5.86469H30.6305C30.7088 5.86469 30.7729 5.79958 30.7729 5.72001V2.96398C30.7729 1.6735 29.7391 0.623169 28.4705 0.623169H25.5786C25.5003 0.623169 25.4362 0.688272 25.4362 0.767842V2.02505C25.4362 2.10607 25.5003 2.16973 25.5786 2.16973Z" fill="#375CE8"/>
                          <path d="M30.6314 17.8031H29.3955C29.3172 17.8031 29.2531 17.8682 29.2531 17.9478V20.7038C29.2531 21.1422 28.9028 21.4981 28.4714 21.4981H25.5795C25.5012 21.4981 25.4371 21.5632 25.4371 21.6428V22.8985C25.4371 22.9781 25.5012 23.0432 25.5795 23.0432H28.4714C29.7415 23.0432 30.7738 21.9929 30.7738 20.7024V17.9464C30.7738 17.8668 30.7097 17.8031 30.6314 17.8031Z" fill="#375CE8"/>
                          <path d="M0.886756 5.86483H2.12267C2.20099 5.86483 2.26506 5.79972 2.26506 5.72015V2.96412C2.26506 2.52576 2.61533 2.16987 3.04676 2.16987H6.41991C6.49822 2.16987 6.56229 2.10476 6.56229 2.02519V0.769429C6.56229 0.689859 6.49822 0.624756 6.41991 0.624756H3.04676C1.77667 0.624756 0.74437 1.67508 0.74437 2.96557V5.7216C0.74437 5.80117 0.808444 5.86483 0.886756 5.86483Z" fill="#375CE8"/>
                          <path d="M3.04676 23.0432H6.41991C6.49822 23.0432 6.56229 22.9781 6.56229 22.8985V21.6428C6.56229 21.5632 6.49822 21.4981 6.41991 21.4981H3.04676C2.61533 21.4981 2.26506 21.1422 2.26506 20.7038V17.9478C2.26506 17.8682 2.20099 17.8031 2.12267 17.8031H0.886756C0.808444 17.8031 0.74437 17.8682 0.74437 17.9478V20.7038C0.74437 21.9929 1.7781 23.0432 3.04676 23.0432Z" fill="#375CE8"/>
                        </svg>
                        Chụp ảnh minh họa
                      </b-button>
                    </div>
                    <div class="col-span-5">
                      <b-button class="w-full upload-btn">
                        <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M33.7145 2.75513C30.2798 2.33697 26.8368 1.97784 23.3971 1.59084C18.8119 1.07593 14.2235 0.577414 9.64161 0.039544C7.48516 -0.212993 5.92634 0.751238 5.41338 2.72562C5.40009 2.81581 5.32539 3.41763 5.73709 3.47011L6.63022 3.58326C6.84769 3.61113 7.05022 3.46519 7.09006 3.25037L7.1216 3.07818C7.28429 2.18939 8.17576 1.63676 9.15189 1.74663C13.0664 2.19103 16.9792 2.65838 20.8937 3.10606C24.4263 3.5111 27.9607 3.89975 31.495 4.29823C32.164 4.37366 32.8314 4.45238 33.4971 4.55405C34.7023 4.73771 35.2634 5.41005 35.1439 6.62845C34.9513 8.58971 34.7139 10.5461 34.4865 12.504C34.1262 15.5935 33.756 18.6813 33.3941 21.7692C33.2829 22.7121 33.1949 23.6583 33.077 24.5996C32.9974 25.2309 32.6786 25.7015 31.9266 25.9819C31.9266 25.6392 31.9266 25.3818 31.9266 25.1259C31.9266 24.4257 31.9266 23.7255 31.9266 23.0253C31.9266 22.7629 31.7108 22.5497 31.4452 22.5497H30.5653C30.2997 22.5497 30.0839 22.7646 30.0839 23.0269C30.0856 24.9259 30.0872 26.7904 30.0723 28.6565C30.0657 29.4551 29.5029 29.8946 28.7973 30.1127C28.4155 30.2308 27.9922 30.2521 27.5888 30.2521C19.7432 30.2603 11.8993 30.2587 4.05376 30.257C2.33392 30.257 1.79937 29.7356 1.79605 28.0564C1.79439 27.4627 1.84253 26.8642 1.78443 26.2755C1.69312 25.3506 2.13803 24.8652 3.20048 24.3175C4.82404 23.4812 6.29986 22.394 7.62461 21.146C9.32454 19.5439 10.3887 19.3373 11.7981 20.5606C13.2805 21.8462 14.763 23.1319 16.2454 24.4175C17.791 25.7556 19.5789 25.9508 21.3701 24.939C23.4784 23.7468 25.5801 22.5415 27.6818 21.3363L27.8378 21.2477C28.3226 20.9706 28.8073 20.6918 29.2921 20.4147C29.4099 20.3474 29.5311 20.2818 29.6672 20.208L30.7396 19.5997C30.7396 19.5997 31.9167 18.7814 31.9283 17.804C31.9283 15.5132 31.9283 13.2223 31.9283 10.9331C31.9266 8.3093 30.318 6.72521 27.6585 6.72521C20.9667 6.72521 14.2749 6.72521 7.58311 6.72521C7.29923 6.72521 7.0137 6.72521 6.6518 6.72521H4.84895C4.64808 6.72521 4.46381 6.72521 4.28784 6.72521C4.20151 6.72521 4.11685 6.72521 4.03384 6.72521C3.94752 6.72521 3.86119 6.72521 3.77653 6.72521C1.6151 6.72521 0.0313763 8.17319 0.0214158 10.2984C-0.0101258 16.4347 -0.00348549 22.5711 0.0197557 28.7074C0.0263961 30.526 1.49723 31.9821 3.32997 31.9871C11.637 32.0051 19.9441 32.0051 28.2495 31.9838C30.2931 31.9789 31.8486 30.4341 31.9117 28.4319C31.9249 28.017 32.0212 27.812 32.4562 27.6825C33.8274 27.2741 34.6541 26.3247 34.8467 24.9341C35.1671 22.6301 35.4228 20.3163 35.6933 18.0057C36.12 14.3505 36.5118 10.6904 36.9666 7.03678C37.2322 4.88366 35.8975 3.02079 33.7145 2.75513ZM1.79439 10.9347C1.79439 10.6034 1.81763 10.2673 1.87739 9.94259C2.03012 9.11446 2.59621 8.60119 3.43289 8.50116C3.5989 8.48148 3.76989 8.48148 3.93756 8.48148C11.8329 8.47984 19.7283 8.47984 27.6253 8.48312C27.8644 8.48312 28.1068 8.49952 28.3425 8.53888C29.3983 8.71434 30.0706 9.43915 30.0806 10.487C30.1005 12.7926 30.1005 15.0999 30.0706 17.4055C30.0673 17.6466 29.8548 17.9828 29.639 18.109C26.5795 19.8981 23.505 21.6642 20.4272 23.4221C19.3481 24.0387 18.4816 23.9518 17.5154 23.127C16.0396 21.8692 14.577 20.595 13.1245 19.311C11.2934 17.6909 9.42248 17.5777 7.44698 18.9962C5.81346 20.1687 4.18159 21.3461 2.54641 22.5186C2.34056 22.6662 2.12308 22.7974 1.83091 22.9876C1.81431 22.6613 1.79273 22.4333 1.79273 22.2037C1.78941 18.4485 1.78941 14.6916 1.79439 10.9347Z" fill="#59A55E"/>
                          <path d="M21.1759 18.8365C18.9962 18.8365 17.2232 17.0851 17.2232 14.932C17.2232 12.7789 18.9962 11.0275 21.1759 11.0275C23.3556 11.0275 25.1285 12.7789 25.1285 14.932C25.1285 17.0851 23.3539 18.8365 21.1759 18.8365ZM21.1759 12.8691C20.0238 12.8691 19.0875 13.7939 19.0875 14.932C19.0875 16.0701 20.0238 16.9949 21.1759 16.9949C22.328 16.9949 23.2643 16.0701 23.2643 14.932C23.2643 13.7939 22.3263 12.8691 21.1759 12.8691Z" fill="#59A55E"/>
                        </svg>
                        Thêm từ thư viện ảnh
                      </b-button>
                    </div>
                  </div>

                  <div class="grid grid-cols-10 mt-24">
                    <div class="col-span-5">
                      <b-button class="bottom-btn back">
                        Back
                      </b-button>
                    </div>
                    <div class="col-span-5">
                      <b-button variant="primary" class="bottom-btn create flex items-center float-right">
                        <feather-icon icon="PlusCircleIcon"/>
                        Create
                      </b-button>
                    </div>
                  </div>
                
                </div>  
              </b-form>              
            </validation-observer>
          </vx-card>
        </div>
      </div>
  </div>
</template>

<script>
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'
import vSelect from 'vue-select'
import UserItem from '../components/UserItem.vue'
import SearchField from '../components/SearchField.vue'
import moduleChat          from '@/store/chat/moduleChat.js'
import VueCoreImageUpload  from 'vue-core-image-upload';
import { contacts } from './data'


export default {
  data () {
    return {
      user_data: null,
      user_not_found: false,
      contacts: contacts,
      form: {
        first_name: null,
        last_name: null,
        position: null,
        email: null
      },
      
    }
  },
  computed: {
    userAddress () {
      let str = ''
      for (const field in this.user_data.location) {
        str += `${field  } `
      }
      return str
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${this.user_data.username}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      this.$router.push({name:'app-user-list'})
      this.showDeleteSuccess()

      /* UnComment below lines for enabling true flow if deleting user */
      this.$store.dispatch("userManagement/removeRecord", this.user_data.id)
        .then(()   => { this.$router.push({name:'app-user-list'}); this.showDeleteSuccess() })
        .catch(err => { console.error(err)       })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted'
      })
    },
    successUpload () {
      this.$vs.notify({ color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur' })
    }
  },
  created () {
    return this.contacts.map(contact => {
      contact.status = contact.status == "online"? "#2DCA8C": "#FF715B";
      return contact;
      });
  },
  computed: {
  },
  components: {
    'v-select': vSelect,
    'user-item': UserItem,
    'vue-core-image-upload': VueCoreImageUpload,
    'search-field': SearchField,
  }
}

</script>

<style lang="scss">
  #avatar-col {
    width: 10rem;
  }

  #page-user-view {
    table {
      td {
        vertical-align: top;
        min-width: 140px;
        padding-bottom: .8rem;
        word-break: break-all;
      }

      &:not(.permissions-table) {
        td {
          @media screen and (max-width:370px) {
            display: block;
          }
        }
      }
    }
  }

  #card_container_2 {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 41px;
  }

  .upload-btn {
    background-color: white !important;
    color: #4A4A4A !important;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    line-height: 18px;
    border-radius: 10px;
    border-color: #AAAAAA;
    height: 55px;

    svg {
      margin-right: 19px;
    }
  }  

  @media screen and (min-width:1201px) and (max-width:1211px),
  only screen and (min-width:636px) and (max-width:991px) {
    #account-info-col-1 {
      width: calc(100% - 12rem) !important;
    }
  }

  

</style>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600&display=swap');
  @import "@/assets/scss/vuexy/extraComponents/_form.scss";
  @import "@/assets/scss/vuexy/extraComponents/_button.scss";
  @import "@/assets/scss/vuexy/extraComponents/_select.scss";
</style>
