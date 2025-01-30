export interface Staffs {  
    userId : number,
    name : string,
    role : string,
    email : string,
    phoneNumber : string,
    hasAccess : boolean,
  }

export interface Users {
    userId : number,
    userName : string,
    email : string,
    password : string,
    isMember : boolean,
    memberTier : string,
}

export interface MemberTier {
  id : number,
  title : string,
  color : string,
}