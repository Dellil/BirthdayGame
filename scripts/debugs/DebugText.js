export default function debugText(caption, group_obj) {
    caption.setText(Phaser.Utils.String.Format((
        'Total:       %1\n' +
        'Max:         %2\n' +
        'Active:      %3\n' +
        'Inactive:    %4\n' +
        'Used:        %5\n' +
        'Free:        %6\n' +
        'Full:        %7\n'
    ),
        [
            group_obj.getLength(),
            group_obj.maxSize,
            group_obj.countActive(true),
            group_obj.countActive(false),
            group_obj.getTotalUsed(),
            group_obj.getTotalFree(),
            group_obj.isFull()
        ]
    ));
}