import routes from "../routes";

export const getJoin = (req, res) => { 
    res.render("join", {pageTitle: "Join"});
}

export const postJoin =(req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2)  {
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else {
        // To Do: 유저 등록
        // To Do: 유저 로그인 시키기
        res.redirect(routes.home)
    }
    
}

export const getLogin = (req, res) => 
    res.render("login", {pageTitle: "Login"});

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    //To Do: Process LogOut
    res.redirect(routes.home);
}


export const userDetail = (req, res) => 
    res.render("userDetail", {pageTitle: "User Detail"});


export const editProfile = (req, res) => 
    res.render("editProfile", {pageTitle: "Edit Profile"});


export const changePassword = (req, res) => 
    res.render("changePassword", {pageTitle: "Change Password"});