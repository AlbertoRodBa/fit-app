// ConfirmDialog.jsx
import * as Dialog from "@radix-ui/react-dialog";

export default function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  description,
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 max-w-sm p-6 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-lg font-bold mb-2">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-4">
            {description}
          </Dialog.Description>
          <div className="flex justify-end space-x-3">
            <Dialog.Close asChild>
              <button className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-black dark:text-white">
                Cancelar
              </button>
            </Dialog.Close>
            <button
              onClick={() => {
                onConfirm();
                onOpenChange(false);
              }}
              className="px-4 py-2 rounded bg-purple-700 hover:bg-purple-800 text-white"
            >
              Confirmar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
