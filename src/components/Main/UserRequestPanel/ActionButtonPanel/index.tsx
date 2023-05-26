import ActionButton from '@components/common/Button';
import useFormButtonConfig from '@components/Main/hooks/useFormButtonConfig';

const ActionButtonPanel = () => {
  const { formButtonsConfig } = useFormButtonConfig();

  return (
    <div className="flex justify-center items-center gap-3 relative md:flex-wrap w-full sm:w-[300px]">
      {formButtonsConfig.map(
        button =>
          button.shouldRender && <ActionButton key={button.label} {...button} />
      )}
    </div>
  );
};

export default ActionButtonPanel;
