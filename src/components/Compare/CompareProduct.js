import React from 'react'
import Grid from '@material-ui/core/Grid'

function CompareProduct(props) {
    console.log("props", props)
    return (
        <div style={{ display: "flex", border: "1px solid black", marginBottom: "15px", marginTop: "15px" }}>
            {
                props.data.map((i) => {
                    return (
                        <Grid xs={12} sm={6} md={4} style={{ margin: "5px", borderRight: "1px solid Gray" }}>
                            <div>
                                <h4>{i.plan}</h4>
                            </div>
                            <div>
                                <h5><b>Medical Feature:</b></h5>
                                <div>
                                    {
                                        i.medicalFeature.map((i) => {
                                            return (
                                                <div style={{ marginBottom: "10px", borderBottom: "1px solid gray" }}>
                                                    <p> Benefit Name:{i.benefitName}</p>
                                                    <p>Value : {i.benefitValue}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <h5><b>Travel Feature:</b></h5>
                                {
                                    i.travelFeature.map((i) => {
                                        return (
                                            <div style={{ marginBottom: "10px", borderBottom: "1px solid gray" }}>
                                                <p> Benefit Name:{i.benefitName}</p>
                                                <p>Value : {i.benefitValue}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <h5><b>Sum Incured</b></h5>
                                <div>{i.sumInsured}</div>
                            </div>
                        </Grid>
                    )

                })
            }
        </div>
    )
}
export default CompareProduct;