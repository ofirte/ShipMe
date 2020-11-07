import { reduxForm, Field } from "redux-form";
import FormField from "./FormFiled";
import { uploadImg } from "../actions";
import { connect } from "react-redux";
import {
  Content,
  FileInput,
  FormSubmit,
  TopForm,
  MiniContent,
} from "./shared/styles";
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
  image,
  defaultValue,
  size
}) => {
  const renderTopFields = () => {
    const renderdFileds = fields.slice(0, 2).map((field, index) => {
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
    return (
      <TopForm>
        <MiniContent size={size}>{renderdFileds}</MiniContent>
      </TopForm>
    );
  };
  const renderBottomFields = () => {
    return fields.slice(2).map((field, index) => {
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
      <div>
        <Avatar
          size="90"
          facebook-id="invalidfacebookusername"
          src={data || image ? data.imageUrl || image : ""}
          round={true}
        />
        <div>{renderImageSet()}</div>
      </div>
    );
  };
  const renderImageSet = () => {
    return (
      <FileInput
        type="file"
        onChange={(e) => {
          uploadImg(e.target.files[0], imgFrom, url, userId, noUpdateDb);
        }}
      ></FileInput>
    );
  };
  return (
    <Content>
      <h3 style={{ display: "inline-block" }}>Company info</h3>
      {renderAvater()}
      <form onSubmit={handleSubmit(() => updateData(formValues))}>
        {renderTopFields()}
        <div>{renderBottomFields()}</div>
        <FormSubmit type="submit" value="save" submit></FormSubmit>
      </form>
    </Content>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    formValues: state.form,
    initialValues: ownProps.data ? ownProps.data : {},
    form: ownProps.formName,
    validate: ownProps.validate,
    image: state.image,
  };
};

export default connect(mapStateToProps, {
  uploadImg,
})(reduxForm({ enableReinitialize: true })(BaseForm));
