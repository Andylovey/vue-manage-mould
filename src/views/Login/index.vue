<template>
  <div class="login-container flex_c_c">
    <div>
      <h1 class="tlc mb_10">登录系统</h1>
      <Form
        ref="formCustom"
        :model="formCustom"
        :rules="ruleCustom"
        style="width: 400px"
      >
        <FormItem prop="account">
          <Input type="text" v-model="formCustom.account" size="large">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formCustom.password" number size="large">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="handleSubmit('formCustom')"
            :long="true"
            >登录</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formCustom: {
        account: "",
        password: "",
      },
      ruleCustom: {
        account: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
          this.$lst.setLst('token','wqe21142s1f2as1221fas4g')
          this.$lst.setLst('user',this.formCustom.account)
          this.$router.push({
              path: '/'
          })
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  width: 100%;
  min-height: 100vh;
  background-color: #2d3a4b;
}
</style>