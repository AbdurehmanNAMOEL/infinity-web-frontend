export const userInitialProfileData=(userProfileData)=>{
    let data={
    'id':userProfileData?.id,
    'firstName':userProfileData?.firstName,
    'lastName':userProfileData?.lastName,
    'phoneNumber':userProfileData?.phoneNumber,
    'email':userProfileData?.email,
    'gender':userProfileData?.gender,
    'birthPlaceId':userProfileData?.birthPlaceId,
    'educationLevelId':userProfileData?.educationLevelId,
    'incomeLevelId':userProfileData?.incomeLevelId,
    'professionId':userProfileData?.professionId,
    'religionId':userProfileData?.religionId,
    'maritalStatusId':userProfileData?.maritalStatusId,
    'residenceCityId':userProfileData?.residenceCityId,
}
    return data
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