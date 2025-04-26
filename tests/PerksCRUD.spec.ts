import test, { APIRequestContext, expect } from "@playwright/test"
import { PerkAPI } from "../api/perkApi"
import testData from "../fixtures/testData.json"
import { ENV } from "../config/env";




test.describe('Perk API - CRUD using request fixture', async() => {
    let perkId: string;
  //clone test
    test('API Test', async ({ request }) => {
        const apireq = new PerkAPI(request)

        const response = await apireq.createPerk(testData.createPerk)
        const createdPerk =await response.json()
        perkId =  createdPerk._id
       // console.log(perkId =  createdPerk._id)

       //get perk
       const getPerkByid = await apireq.getPerk(perkId)
       await getPerkByid.json()

       //Update perk 
       const updatePerk = await apireq.updatePerk(testData.updatePerk,perkId)
       const updatedResponse = await updatePerk.json()
       console.log(updatedResponse)
       const updatedchange:string = updatedResponse.internalTitle
       console.log(updatedchange)


       //delete perk 
       

       const deletePerkByid = await apireq.deletePerk(perkId)
       const deletedPerk = deletePerkByid.statusText()
       console.log(deletedPerk)

    })

  });
