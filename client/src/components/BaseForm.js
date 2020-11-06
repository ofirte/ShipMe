import { reduxForm, Field } from "redux-form";
import FormField from "./FormFiled";
import { uploadImg } from "../actions";
import { connect } from "react-redux";
import { FormSubmit, HeaderDiv } from "./shared/styles";
import Avatar from "react-avatar";
const BaseForm = ({
  fields,
  data,
  updateData,
  imgFrom,
  handleSubmit,
  uploadImg,
  formValues,
  url,
  userId,
  formName,
  noUpdateDb,
  image
}) => {
  const renderFields = () => {
    return fields.map((field, index) => {
      return (
        <Field
          key={index}
          type={field.type}
          name={field.name}
          label={field.label}
          options={field.options}
          read={field.read}
          component={FormField}
        ></Field>
      );
    });
  };
  const renderAvater = () => {
    return (
      <HeaderDiv>
        <Avatar
          size="100"
          facebook-id="invalidfacebookusername"
          src={data||image ? data.imageUrl||image : ""}
          round={true}
        />
        <h3>Company info</h3>
      </HeaderDiv>
    );
  };
  const renderImageSet = () => {
    return (
      <input
        type="file"
        onChange={(e) => {
          uploadImg(e.target.files[0], imgFrom, url, userId,noUpdateDb);
        }}
      ></input>
    );
  };
  return (
    <div>
      {renderAvater()}
      <form onSubmit={handleSubmit(() => updateData(formValues))}>
        {renderImageSet()}
        {renderFields()}
        <FormSubmit type="submit" value="save" submit></FormSubmit>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    formValues: state.form,
    initialValues: ownProps.data ? ownProps.data : {},
    form: ownProps.formName,
    validate: ownProps.validate,
    image:state.image
  };
};

export default connect(mapStateToProps, {
  uploadImg,
})(reduxForm({ enableReinitialize: true })(BaseForm));
