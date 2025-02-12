import React from 'react';
import { Formik, Form } from 'formik';

import BackButton from "components/navigation/BackButton";
import SharedLayout from "components/SharedLayout";

import Input from "components/forms/Input";
import Select from "components/forms/Select";
import Checkbox from "components/forms/Checkbox";
import FormLabel from "components/forms/FormLabel";
import Submit from "components/forms/Submit";

import { identifyAsSurvivor } from 'constants/forms';
import { states } from 'constants/forms';
import { toolUseful } from 'constants/forms';
import { learnFromTool } from 'constants/forms';

import { checkFormStatus, submitForm } from 'utils'

export default function GiveFeedback() {

    return (
        <SharedLayout title="Give Feedback">
            <BackButton className="my-3" />
            <h1 className="subpage-header">Give Feedback</h1>
            <p>The Policy Map and Scorecard will only be effective if it is useful to our users. We want to hear from you how you used the tool and whether it was helpful. If you didn’t find the tool helpful, feel free to share how we can make the necessary improvements. Thanks so much for sharing your feedback and for helping us make the Policy Map and Scorecard the best tool it can possibly be!</p>
            <Formik
                initialValues={{}}
                onSubmit={submitForm("give-feedback")}
            >
                {props => {
                    const formStatus = checkFormStatus(props)
                    if (formStatus) return formStatus
                    return (
                        <Form className="col-12 col-lg-8 mb-5">
                            <Select
                                className="text-uppercase"
                                label="Do you identify as a survivor? (optional)"
                                name="survivor"
                                options={identifyAsSurvivor}
                                required={false}
                            />
                            <Select
                                className="text-uppercase"
                                label="Your state (optional)"
                                name="state"
                                required={false}
                                options={states}
                            />
                            <Select
                                className="text-uppercase"
                                label="Was this tool useful?"
                                name="tool_useful"
                                options={toolUseful}
                                required={true}
                            />
                            <Input
                                className="text-uppercase"
                                label="Can you tell us more about how the tool was or was not useful for you?"
                                name="tool_useful_details"
                                required={true}
                            />
                            <Select
                                className="text-uppercase"
                                label="Did you learn anything about policies related to survivor financial security from the tool?"
                                name="learn_from_tool"
                                options={learnFromTool}
                                required={true}
                            />
                            <div className="form-group pb-4 mb-3">
                                <div className="text-uppercase"><FormLabel required={ true }>How do you plan to use this tool?</FormLabel></div>
                                <Checkbox name="planned_use" value="inform_org_priorities">Inform my organization’s or state coalition’s policy priorities</Checkbox>
                                <Checkbox name="planned_use" value="inform_state_priorities">Inform my state’s policy priorities</Checkbox>
                                <Checkbox name="planned_use" value="inform_officials">Inform elected officials in my state</Checkbox>
                                <Checkbox name="planned_use" value="advocacy_tool">As an advocacy tool</Checkbox>
                                <Checkbox name="planned_use" value="self_educating">Self-educating</Checkbox>
                                <Checkbox name="planned_use" value="other">Other</Checkbox>
                            </div>
                            {/* eslint-disable-next-line react/prop-types */}
                            {props.values.planned_use && props.values.planned_use.includes("other") &&
                            <Input className="text-uppercase" label="Please describe..." name="planned_use_other" required={ true } />
                            }
                            <Input
                                className="text-uppercase pb-4 mb-3"
                                label="What can be improved or changed?"
                                name="improve_or_change"
                                required={true}
                            />
                            <Submit />
                        </Form>
                    )
                }}
            </Formik>
        </SharedLayout>
    )
}
