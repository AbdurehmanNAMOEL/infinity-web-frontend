export const userSubmissionInitialProfileData=(id,userPersonData)=>{
    let data={
     "id":id,
     "birthPlaceId":userPersonData.birthPlaceId,
     "residenceCityId":userPersonData.residenceCityId,
     "religionId":userPersonData.religionId,
     "employmentStatusId":userPersonData.employmentStatusId,
     "incomeLevelId":userPersonData.incomeLevelId,
     "professionId":userPersonData.professionId,
     "educationalLevelId":userPersonData.educationalLevelId,
     "martialStatusId":userPersonData.martialStatusId
}
    return data
}