/**
 * External dependencies
 */
import { filter } from 'lodash';

/**
 * WordPress dependencies
 */
import { NoticeList, SnackbarList } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import '@wordpress/notices';

export default function SettingsNotices() {
	const { removeNotice } = useDispatch( 'core/notices' );
	const notices = useSelect(
		( select ) => select( 'core/notices' ).getNotices(),
		[]
	);
	const dismissibleNotices = filter( notices, {
		isDismissible: true,
		type: 'default',
	} );
	const nonDismissibleNotices = filter( notices, {
		isDismissible: false,
		type: 'default',
	} );
	const snackbarNotices = filter( notices, {
		type: 'snackbar',
	} );

	return (
		<>
			<NoticeList
				notices={ nonDismissibleNotices }
				className="components-notice-list components-editor-notices__pinned"
			/>
			<NoticeList
				notices={ dismissibleNotices }
				className="components-notice-list components-editor-notices__dismissible"
				onRemove={ removeNotice }
			/>
			<SnackbarList
				notices={ snackbarNotices }
				className="components-snackbar-list components-editor-notices__snackbar"
				onRemove={ removeNotice }
			/>
		</>
	);
}
