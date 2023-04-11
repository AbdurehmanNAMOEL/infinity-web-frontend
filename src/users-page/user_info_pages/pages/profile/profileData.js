export const userInitialProfileData=(userProfileData)=>{
    return{
    'id':userProfileData?.map(data=>data?.id)[0],
    'firstName':userProfileData?.map(data=>data?.firstName)[0],
    'lastName':userProfileData?.map(data=>data?.lastName)[0],
    'phoneNumber':userProfileData?.map(data=>data?.phoneNumber)[0],
    'email':userProfileData?.map(data=>data?.email)[0],
    'gender':userProfileData?.map(data=>data?.gender)[0],
    'birthPlaceId':userProfileData?.map(data=>data?.birthPlaceId)[0]?.id,
    // 'educationalLevelId':userProfileData?.map(data=>data?.educationLevelId)[0]?.id,
    'incomeLevelId':userProfileData?.map(data=>data?.incomeLevelId)[0]?.id,
    'professionId':userProfileData?.map(data=>data?.professionId)[0]?.id,
    'religionId':userProfileData?.map(data=>data?.religionId)[0]?.id,
    'residenceCityId':userProfileData?.map(data=>data?.residenceCityId)[0]?.id
}
}

export const profileFillingData=(userPersonData)=>{
    return {  
      "birthPlaceId":userPersonData.birthPlaceId,
     "residenceCityId": userPersonData.residenceCityId,
     "religionId":userPersonData.religionId,
     "employmentStatusId": userPersonData.employmentStatusId,
     "incomeLevelId": userPersonData.incomeLevelId,
     "professionId": userPersonData.professionId}
}