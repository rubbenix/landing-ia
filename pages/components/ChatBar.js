import { TextInput, Button, Group } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';


function ChatBar() {
  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl p-4 z-50"
    >
      <Group
        position="apart"
        className="bg-white rounded-full p-3 shadow-lg border border-gray-200"
      >
        {/* Campo de entrada */}
        <TextInput
          placeholder="¿A dónde quieres enviar?"
          radius="xl"
          size="md"
          className="flex-grow"
        />

        {/* Botón de enviar */}
        <Button
          radius="xl"
          size="md"
          color="blue"
          className="text-white flex items-center justify-center"
        >
          <IconSend size={0} />
        </Button>
      </Group>
    </div>
  );
}

export default ChatBar;
