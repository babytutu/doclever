webpackJsonp([5],{537:function(n,e,t){(function(n,e,t){new n({el:"#app",data:{question:"",pwd:"",pwd1:"",answer:"",resetPending:!1,questionPending:!1,step:0,username:""},methods:{getQuestion:function(){var n=this;this.username?(this.questionPending=!0,t.get("/user/question",{name:n.username},{"content-type":"application/x-www-form-urlencoded"}).then(function(t){n.questionPending=!1,200==t.code?(e.notify(t.msg,1),n.step=1,n.question=t.data):e.notify(t.msg,0)})):e.tip("用户名不能为空",0)},reset:function(){var n=this;this.pwd&&this.pwd1&&this.answer?this.pwd==this.pwd1?(this.questionPending=!0,t.put("/user/reset",{name:n.username,answer:n.answer,password:n.pwd},{"content-type":"application/x-www-form-urlencoded"}).then(function(t){n.questionPending=!1,200==t.code?(e.notify(t.msg,1),setTimeout(function(){location.href="../login/login.html"},1500)):e.notify(t.msg,0)})):e.tip("两次输入的密码不一致",0):e.tip("密码,确认密码,找回密码答案不能为空",0)}}})}).call(e,t(7),t(1),t(3))},768:function(n,e,t){n.exports=t(537)}},[768]);