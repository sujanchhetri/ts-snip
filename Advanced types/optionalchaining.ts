const fetchedUserData = {
    id :'s1',
    name :"sujan",
  job:{title:'ceo',description:'my company'}
  }
  
  // * optional chaining,checks the availabily;if not available then doesn't move forward
  console.log(fetchedUserData?.job?.title);