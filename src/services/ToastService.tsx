import { ToastMessage } from "components/common/toast/ToastMessage";
import { toast } from "material-react-toastify";

export default class ToastService {
	static showSucess(title: string, message?: string) {
		toast(<ToastMessage title={title} type="success" message={message} />, {
			type: toast.TYPE.SUCCESS,
		});
	}
}
