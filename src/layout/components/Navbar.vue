<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->
<img src="../../assets/common/logoone.png" alt="">
    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <div class="avatar-container">
        <div class="avatar-wrapper">
         <div>
          <img src="../../assets/common/logo.png" class="user-avatar">
          </div>
          <span class="user-msg">欢迎您，用户名 {{ username }} </span>
          <el-tooltip content="退出" placement="top">
          <span>
            退出
               <i class="el-icon-caret-bottom" />
          </span>
              </el-tooltip>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb
    // Hamburger
  },
  data() {
    return {
      username: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  created() {
    this.username = this.$store.getters.username
    console.log(this.username)
  },

  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 20px;
  height: 56px;
  overflow: hidden;
  position: relative;
  background-image: url('../../assets/common/backgroundone.png');
  z-index:1000;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  img {
    width: 88px;
    height: 36px;
  }

  .right-menu {
    height: 56px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
       height:56px;
      // margin-right: 30px;
      // display: flex;
      // align-items: center;
      // color:#fff;
      .avatar-wrapper {
        display: flex;
        align-items: center;
        height: 56px;
        position: relative;
        color: #fff;
        .user-msg {
          font-size: 16px;
          margin-right: 25px;
        }
        .user-avatar {
          cursor: pointer;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 15px;
        }

        span {
          // margin-left: 20px;
          // display: inline-block;
          // height: 54px;
          // color:#fff;
          // font-size: 16px;
          // padding-bottom: 10px;

          .exit{
          width: 40px;
          height: 56px;
          text-align: center;
        }
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          color:#fff;
          right: -20px;
          top: 20px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
